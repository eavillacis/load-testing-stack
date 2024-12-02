import http from "k6/http";
import { check, sleep } from "k6";

const isNumeric = (value) => /^\d+$/.test(value);

const default_vus = 5;

const target_vus_env = `${__ENV.TARGET_VUS}`;
const target_vus = isNumeric(target_vus_env)
  ? Number(target_vus_env)
  : default_vus;

const rampUpRampDown = [
  // Ramp-up from 1 to TARGET_VUS virtual users (VUs) in 5s
  { duration: "5s", target: target_vus },

  // Stay at rest on TARGET_VUS VUs for 10s
  { duration: "10s", target: target_vus },

  // Ramp-down from TARGET_VUS to 0 VUs for 5s
  { duration: "5s", target: 0 },
];

export let options = {
  stages: rampUpRampDown,
};

export default function () {
  const body = JSON.stringify({
    Workgroup: "AzureAD",
    UserName: "KR-JYAGUANA",
    ClientName: "Kriptos INC",
    Version: "2.0.8",
  });
  // const agentBackendURL = "https://agent-services.kriptos.io/v3/backend/api/HeartBeat/a6777f9c-f203-421c-b1f9-62b5809bbeeb/fe9d3a82-d4da-4719-b251-82a7703eedce"
  const agentBackendURL = "https://gnqpye2dpp.us-east-1.awsapprunner.com/v3/backend/api/HeartBeat/a6777f9c-f203-421c-b1f9-62b5809bbeeb/fe9d3a82-d4da-4719-b251-82a7703eedce"
  const response = http.post(
    agentBackendURL,
    body,
    { headers: { "Content-Type": "application/json" } }
  );

  check(response, { "status is 200": (r) => r.status === 200 });
  sleep(0.3);
}
