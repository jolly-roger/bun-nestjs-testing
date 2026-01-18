// test.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 100,       // Number of virtual users
  duration: '300s', // Duration of the test
};

export default function () {
  // Replace with the internal Kubernetes service URL of your application
  const res = http.get('http://localhost:10300');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}