export function trackGAEvent(
  action: string,
  category: string,
  label: string,
): void {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
}
