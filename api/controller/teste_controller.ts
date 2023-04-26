import { TypesTeste, getTestesData } from "../models/teste_models.ts";

let testes = getTestesData()

const getTestes = ({ params, response }: { params: { id: string }, response: any },) => {
    response.status = 200
    response.body = testes
}

const searchTeste = (params: { id: string, seconds: string }): (TypesTeste | undefined) => testes.filter((item) => item.timeInSeconds === parseInt(params.seconds))[0]

const getTeste = ({ params, response }: { params: { id: string, seconds: string }, response: any },) => {
    const teste: TypesTeste | undefined = searchTeste(params)

    if (teste) {
        response.status = 200
        response.body = teste
    } else {
        response.status = 404
        response.body = { message: 'teste não encontrado' }
    }
}

const addTeste = async ({ params, request, response }: { params: { id: string, seconds: string }, request: any, response: any }) => {
    const body = await request.body()
    const newTeste: TypesTeste = body.value

    const teste: TypesTeste | undefined = searchTeste(params)

    if (!teste) {
        testes.push(newTeste)
        response.status = 201
        response.body = { message: "OK" }
    } else {
        response.status = 200
        response.body = { message: "Teste já existe" }
    }

}

export { getTestes, getTeste, addTeste }