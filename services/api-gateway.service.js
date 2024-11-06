import ApiGatewayService from 'moleculer-web'

const PORT = process.env.PORT || 3000
const IP = process.env.IP || "0.0.0.0"

export default {
  mixins: [ApiGatewayService],
  name: "api",
  settings: {
    ip: IP,
    port: PORT,
    path: '/api',
    routes: [
      {
        path: 'test-1',
        bodyParsers: { json: { limit: "1MB", strict: false, } },
        aliases: {
          "GET stream": "test-1.stream"
        },
      },
    ],
    use: [],
  },
};
