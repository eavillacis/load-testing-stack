import http from 'k6/http';
import { check, sleep } from "k6";

const isNumeric = (value) => /^\d+$/.test(value);

const default_vus = 5;

const target_vus_env = `${__ENV.TARGET_VUS}`;
const target_vus = isNumeric(target_vus_env) ? Number(target_vus_env) : default_vus;

const loadTestSoak = [{ duration: "2h", target: target_vus },]  // Stay at TARGET_VUS VUs for 2 hours

export let options = {
  stages: loadTestSoak
};

export default function () {
  const response = http.get("https://vectorizer-services.kriptos.dev/MachineLearning/Dummy", { headers: { Accepts: "application/json" } });
  check(response, { "status is 200": (r) => r.status === 200 });
  sleep(.300);
};
