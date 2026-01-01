import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
  fullWidth?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContentIdea {
  title: string;
  concept: string;
  hook: string;
}