export default {
  name: "test-2",
  actions: {
    stream: {
      async handler(ctx) {
        ctx.params.on("data", (data) => this.logger.info(data));
        ctx.params.on("error", (err) => this.logger.error(err.message || 'Something went wrong!'));
        ctx.params.on("end", () => this.logger.info("end"));

        return { success: true };
      },
    },
  },
};
