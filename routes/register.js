const jwt = require('jsonwebtoken');

app.post('/Auth', async (req, res) => {
  const userData = req.body;

  const {
    email,
    endereco,
    genero,
    historicMedic,
    nome,
    nomeUser,
    password,
    telefone,
  } = userData;

  const user = {
    email,
    contato: {
      endereco,
      telefone,
    },
    genero,
    historicMedic,
    nome,
    nomeUser,
    password,
    focusPoints: 0,
  };

  const db = client.db('Focusthink');
  const patientsCollection = db.collection('Pacientes');

  const result = await patientsCollection.insertOne(user);

  if (result.acknowledged) {
    const token = generateToken(user); // Generate token after successful creation
    res.send({
      message: 'Usuário criado com sucesso!',
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } else {
    res.status(500).send({ message: 'Erro ao criar usuário.' });
  }
});

function generateToken(user) {
  const payload = {
    name: user.name,
    email: user.email,
  };
  const secretKey = process.env.JWT_SECRET;
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return token;
}
