import { describe, expect, it, vi } from "vitest";

const { activateProvider } = vi.hoisted(() => ({ activateProvider: vi.fn() }));
vi.mock("@soksak/soksak-kit-plugin-terminal", () => ({ activateProviderTerminalPlugin: activateProvider }));

import { activate } from "./index";

describe("Shitty terminal plugin wiring", () => {
  it("selects the Shitty provider", () => {
    const app = {} as Parameters<typeof activate>[0]["app"];
    activate({ app, subscriptions: [] });
    expect(activateProvider).toHaveBeenCalledWith(app, [], {
      pluginId: "soksak-plugin-terminal-shitty", engineId: "shitty",
      ptySidecarId: "soksak-sidecar-pty", terminalSidecarId: "soksak-sidecar-terminal-shitty", programId: "terminal-shitty",
    });
  });
});
