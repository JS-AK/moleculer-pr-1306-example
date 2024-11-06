import { Readable } from 'node:stream'
import { setTimeout } from "node:timers/promises";

export default {
  name: "test-1",
  actions: {
    stream: {
      async handler(ctx) {
        const stream = new Readable({
          objectMode: true,
          read() { }
        });

        stream.on("data", (data) => this.logger.info(data));
        stream.on("error", (err) => this.logger.error(err.message || 'Something went wrong!'));
        stream.on("end", () => this.logger.info("end"));

        setImmediate(async () => {
          for (let i = 0; i <= 8; i++) {
            stream.push({ token: crypto.randomUUID() });

            await setTimeout(1000)
          }

          stream.push(null);
        });

        const data = await ctx.call("test-2.stream", stream);

        return data
      },
    },
  }
};
