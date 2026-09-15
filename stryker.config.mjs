// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information.",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "vitest",
  testRunner_comment:
    "Take a look at https://stryker-mutator.io/docs/stryker-js/vitest-runner for information about the vitest plugin.",
  coverageAnalysis: "perTest",
  // A regression floor, not a target. Well below the current score on purpose:
  // it should fire when assertions are lost, never nag you toward 100%.
  thresholds: { high: 90, low: 80, break: 85 },
  mutate: ["src/sim/**/*.ts", "!src/sim/**/*.spec.ts", "src/present/**/*.ts", "!src/present/**/*.spec.ts"],
};
export default config// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
    _comment:
      "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information.",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "vitest",
    testRunner_comment:
      "Take a look at https://stryker-mutator.io/docs/stryker-js/vitest-runner for information about the vitest plugin.",
    coverageAnalysis: "perTest",
    // A regression floor, not a target. Well below the current score on purpose:
  //   // it should fire when assertions are lost, never nag you toward 100%.
  //     thresholds: { high: 90, low: 80, break: 85 },
  //       mutate: ["src/sim/**/*.ts", "!src/sim/**/*.spec.ts", "src/present/**/*.ts", "!src/present/**/*.spec.ts"],
  //       };
  //       export default config;;
