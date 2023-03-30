import { get } from "http";
import { CronJob } from "cron";

const pingGoogle = () => {
  get("http://akm-api.vviia.repl.co/api/v1/", (res) => {
    console.log(`Ping successful at ${new Date()}`);
  }).on("error", (err) => {
    console.log(`Ping failed with error: ${err}`);
  });
};

// Create a new cron job that runs the pingGoogle function every 3 minutes
const pingJob = new CronJob("*/3 * * * *", pingGoogle);

// Start the cron job
pingJob.start();
