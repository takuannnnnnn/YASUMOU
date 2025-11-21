import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  solution: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ElementType;
}

export interface TargetAudience {
  type: string;
  description: string;
  icon: React.ElementType;
}