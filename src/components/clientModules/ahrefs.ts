export default function ahrefsAnalytics() {
  if (typeof window === 'undefined') {
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://analytics.ahrefs.com/analytics.js';
  script.setAttribute('data-key', 'qLbUJR8zACEEjacElQ/oEQ');
  script.async = true;

  document.head.appendChild(script);
}