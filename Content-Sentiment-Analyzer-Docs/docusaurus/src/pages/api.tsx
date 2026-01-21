import React from 'react';
import Layout from '@theme/Layout';

function ApiPage() {
  return (
    <Layout title="API Reference">
      <iframe
        src="/api/index.html"
        style={{
          width: '100%',
          height: 'calc(100vh - 60px)', // 60px is the height of the navbar
          border: 'none',
        }}
      />
    </Layout>
  );
}

export default ApiPage;
