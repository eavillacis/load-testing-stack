import http from 'k6/http';
import { check, sleep } from "k6";

const loadTestSpike = [
  { duration: "1s", target: 1000 },  // Spike to 1000 VUs in 1s
  { duration: "1s", target: 0 },  // Drop to 0 VUs in 1s
]

export let options = {
  stages: loadTestSpike
};

export default function () {
  const response = http.get("https://vectorizer-services.kriptos.dev/MachineLearning/Dummy", { headers: { Accepts: "application/json" } });
  check(response, { "status is 200": (r) => r.status === 200 });
  sleep(.300);
};
