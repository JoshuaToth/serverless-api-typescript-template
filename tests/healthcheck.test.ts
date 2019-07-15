import axios from 'axios'

test('healthcheck returns 200 OK', async () => {
    await axios.get(process.env.API_URL + '/healthcheck').then((response) => {
        expect(response.status).toBe(200)
    })
})
