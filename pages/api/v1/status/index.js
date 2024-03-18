function status(request, response) {
  response.status(200).json({ chave: "bora ver o retorno desse status." });
}

export default status;
