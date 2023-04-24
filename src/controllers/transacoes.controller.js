import db from "../app.js";

export async function novaTransacao (req, res) {
    const { authorization, usuario} = req.headers;
    const transacao = req.body;

    const token = authorization?.replace("Bearer", "");
    const tokenExiste = await db.collection('logados').findOne({token: token, user: usuario})

    if (!usuario || !token || !tokenExiste) return res.sendStatus(401);

    try{
        await db.collection('carteira').insertOne({
            user: usuario,
            value: transacao.value,
            type: transacao.type,
            date: transacao.date,
            description: transacao.description
        })

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function listarTransacoes (req, res) {
    const { authorization, usuario} = req.headers;

    const token = authorization?.replace("Bearer", "");
    const tokenExiste = await db.collection('logados').findOne({token: token})

    if (!usuario || !token || !tokenExiste) return res.sendStatus(401);

    try {
        const transacoes = await db.collection('carteira').find( {user: usuario} ).toArray();
        res.status(200).send(transacoes);
    } catch (err) {
        res.status(500).send(err.message);
    }
}