import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    REACT_APP_ENV: 'dev',
    API_URL: 'http://drp.bighome360.com',
    SOCKET_SERVER: '//localhost:8001',
  },
});
