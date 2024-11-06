export default {
	namespace: "dev",
	nodeID: crypto.randomUUID(),
	metadata: {},

	logger: {
		type: "Console",
		options: {
			colors: true,
			moduleColors: false,
			formatter: "full",
			objectPrinter: null,
			autoPadding: false,
		},
	},

	logLevel: "info",

	transporter: "nats://localhost:4222",

	cacher: false,

	serializer: "JSON",

	requestTimeout: 10 * 1000,

	retryPolicy: {
		enabled: false,
		retries: 5,
		delay: 100,
		maxDelay: 1000,
		factor: 2,
		check: (err) => err && !!err.retryable,
	},

	maxCallLevel: 100,

	heartbeatInterval: 10,

	heartbeatTimeout: 30,

	contextParamsCloning: false,

	tracking: {
		enabled: false,
		shutdownTimeout: 5000,
	},

	disableBalancer: false,

	registry: {
		strategy: "RoundRobin",
		preferLocal: true,
	},

	circuitBreaker: {
		enabled: false,
		threshold: 0.5,
		minRequestCount: 20,
		windowTime: 60,
		halfOpenTime: 10 * 1000,
		check: (err) => err && err.code >= 500,
	},

	bulkhead: {
		enabled: false,
		concurrency: 10,
		maxQueueSize: 100,
	},

	validator: { type: "Fastest" },

	errorHandler: null,

	metrics: { enabled: false },

	tracing: { enabled: false },

	middlewares: [],

	replCommands: null,

	// Called after broker created.
	created(broker) {

	},

	// Called after broker started.
	async started(broker) {

	},

	// Called after broker stopped.
	async stopped(broker) {

	},
};
