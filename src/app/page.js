import Image from "next/image";
import React from 'react';
import { GraphCanvas } from 'reagraph';

export default function Home() {
  return (
    <GraphCanvas
      nodes={[
        {
          id: 'n-1',
          label: '1'
        },
        {
          id: 'n-2',
          label: '2'
        }
      ]}
      edges={[
        {
          id: '1->2',
          source: 'n-1',
          target: 'n-2',
          label: 'Edge 1-2'
        }
      ]}
    />
  );
}
