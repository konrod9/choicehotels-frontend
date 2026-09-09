export async function trackClick(offer: string, sub1: string): Promise<void> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5235"}/click?offer=${encodeURIComponent(offer)}&sub1=${encodeURIComponent(sub1)}`,
      { method: "GET", redirect: "follow" }
    );
    if (response.ok) {
      const redirectUrl = await response.text();
      window.location.href = redirectUrl;
    }
  } catch (error) {
    console.error("Click tracking failed:", error);
  }
}

export async function trackClickDirect(offer: string, sub1: string): Promise<string> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5235"}/click?offer=${encodeURIComponent(offer)}&sub1=${encodeURIComponent(sub1)}`,
      { method: "GET" }
    );
    if (response.ok) {
      const text = await response.text();
      return text;
    }
  } catch (error) {
    console.error("Click tracking failed:", error);
  }
  return "";
}

export function trackGAEvent(action: string, category: string, label: string): void {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
}

export function trackCTA(offer: string, sub1: string, buttonName: string): void {
  trackGAEvent("cta_click", buttonName, offer);
}
