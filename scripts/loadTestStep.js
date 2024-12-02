import http from 'k6/http';
import { check, sleep } from "k6";

const loadTestStep = [
  { duration: "5s", target: 10 },  // Ramp-up to 10 VUs in 5s
  { duration: "5s", target: 20 },  // Ramp-up to 20 VUs in 5s
  { duration: "5s", target: 30 },  // Ramp-up to 30 VUs in 5s
]

export let options = {
  stages: loadTestStep
};

export default function () {
  const response = http.get("https://vectorizer-services.kriptos.dev/MachineLearning/Dummy", { headers: { Accepts: "application/json" } });
  check(response, { "status is 200": (r) => r.status === 200 });
  sleep(.300);
};
