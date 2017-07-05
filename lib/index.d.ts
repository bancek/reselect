export as namespace Reselect;

export type Selector<S, R> = (state: S) => R;

export type OutputSelector<S, R, C> = Selector<S, R> & {
  resultFunc: C;
  recomputations: () => number;
  resetRecomputations: () => number;
}

export type ParametricSelector<S, P, R> = (state: S, props: P, ...args: any[]) => R;

export type OutputParametricSelector<S, P, R, C> = ParametricSelector<S, P, R> & {
  resultFunc: C;
  recomputations: () => number;
  resetRecomputations: () => number;
}

/* one selector */
export function createSelector<S1, R1, T>(
  selector: Selector<S1, R1>,
  combiner: (res: R1) => T,
): OutputSelector<S1, T, (res: R1) => T>;
export function createSelector<S1, P1, R1, T>(
  selector: ParametricSelector<S1, P1, R1>,
  combiner: (res: R1) => T,
): OutputParametricSelector<S1, P1, T, (res: R1) => T>;

/* two selectors */
export function createSelector<S1, R1, S2, R2, T>(
  selector1: Selector<S1, R1>,
  selector2: Selector<S2, R2>,
  combiner: (res1: R1, res2: R2) => T,
): OutputSelector<S1 & S2, T, (res1: R1, res2: R2) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, T>(
  selector1: ParametricSelector<S1, P1, R1>,
  selector2: ParametricSelector<S2, P2, R2>,
  combiner: (res1: R1, res2: R2) => T,
): OutputParametricSelector<S1 & S2, P1 & P2, T, (res1: R1, res2: R2) => T>;

/* three selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, T>(
  selector1: Selector<S1, R1>,
  selector2: Selector<S2, R2>,
  selector3: Selector<S3, R3>,
  combiner: (res1: R1, res2: R2, res3: R3) => T,
): OutputSelector<S1 & S2 & S3, T, (res1: R1, res2: R2, res3: R3) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, T>(
  selector1: ParametricSelector<S1, P1, R1>,
  selector2: ParametricSelector<S2, P2, R2>,
  selector3: ParametricSelector<S3, P3, R3>,
  combiner: (res1: R1, res2: R2, res3: R3) => T,
): OutputParametricSelector<S1 & S2 & S3, P1 & P2 & P3, T, (res1: R1, res2: R2, res3: R3) => T>;

/* four selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, T>(
  selector1: Selector<S1, R1>,
  selector2: Selector<S2, R2>,
  selector3: Selector<S3, R3>,
  selector4: Selector<S4, R4>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4) => T,
): OutputSelector<S1 & S2 & S3 & S4, T, (res1: R1, res2: R2, res3: R3, res4: R4) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, T>(
  selector1: ParametricSelector<S1, P1, R1>,
  selector2: ParametricSelector<S2, P2, R2>,
  selector3: ParametricSelector<S3, P3, R3>,
  selector4: ParametricSelector<S4, P4, R4>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4, P1 & P2 & P3 & P4, T, (res1: R1, res2: R2, res3: R3, res4: R4) => T>;

/* five selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, S5, R5, T>(
  selector1: Selector<S1, R1>,
  selector2: Selector<S2, R2>,
  selector3: Selector<S3, R3>,
  selector4: Selector<S4, R4>,
  selector5: Selector<S5, R5>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T,
): OutputSelector<S1 & S2 & S3 & S4 & S5, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, S5, P5, R5, T>(
  selector1: ParametricSelector<S1, P1, R1>,
  selector2: ParametricSelector<S2, P2, R2>,
  selector3: ParametricSelector<S3, P3, R3>,
  selector4: ParametricSelector<S4, P4, R4>,
  selector5: ParametricSelector<S5, P5, R5>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4 & S5, P1 & P2 & P3 & P4 & P5, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T>;

/* six selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, S5, R5, S6, R6, T>(
  selector1: Selector<S1, R1>,
  selector2: Selector<S2, R2>,
  selector3: Selector<S3, R3>,
  selector4: Selector<S4, R4>,
  selector5: Selector<S5, R5>,
  selector6: Selector<S6, R6>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T,
): OutputSelector<S1 & S2 & S3 & S4 & S5 & S6, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, S5, P5, R5, S6, P6, R6, T>(
  selector1: ParametricSelector<S1, P1, R1>,
  selector2: ParametricSelector<S2, P2, R2>,
  selector3: ParametricSelector<S3, P3, R3>,
  selector4: ParametricSelector<S4, P4, R4>,
  selector5: ParametricSelector<S5, P5, R5>,
  selector6: ParametricSelector<S6, P6, R6>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4 & S5 & S6, P1 & P2 & P3 & P4 & P5 & P6, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T>;

/* seven selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, S5, R5, S6, R6, S7, R7, T>(
  selector1: Selector<S1, R1>,
  selector2: Selector<S2, R2>,
  selector3: Selector<S3, R3>,
  selector4: Selector<S4, R4>,
  selector5: Selector<S5, R5>,
  selector6: Selector<S6, R6>,
  selector7: Selector<S7, R7>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T,
): OutputSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, S5, P5, R5, S6, P6, R6, S7, P7, R7, T>(
  selector1: ParametricSelector<S1, P1, R1>,
  selector2: ParametricSelector<S2, P2, R2>,
  selector3: ParametricSelector<S3, P3, R3>,
  selector4: ParametricSelector<S4, P4, R4>,
  selector5: ParametricSelector<S5, P5, R5>,
  selector6: ParametricSelector<S6, P6, R6>,
  selector7: ParametricSelector<S7, P7, R7>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7, P1 & P2 & P3 & P4 & P5 & P6 & P7, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T>;

/* eight selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, S5, R5, S6, R6, S7, R7, S8, R8, T>(
  selector1: Selector<S1, R1>,
  selector2: Selector<S2, R2>,
  selector3: Selector<S3, R3>,
  selector4: Selector<S4, R4>,
  selector5: Selector<S5, R5>,
  selector6: Selector<S6, R6>,
  selector7: Selector<S7, R7>,
  selector8: Selector<S8, R8>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8) => T,
): OutputSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, S5, P5, R5, S6, P6, R6, S7, P7, R7, S8, P8, R8, T>(
  selector1: ParametricSelector<S1, P1, R1>,
  selector2: ParametricSelector<S2, P2, R2>,
  selector3: ParametricSelector<S3, P3, R3>,
  selector4: ParametricSelector<S4, P4, R4>,
  selector5: ParametricSelector<S5, P5, R5>,
  selector6: ParametricSelector<S6, P6, R6>,
  selector7: ParametricSelector<S7, P7, R7>,
  selector8: ParametricSelector<S8, P8, R8>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8, P1 & P2 & P3 & P4 & P5 & P6 & P7 & P8, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8) => T>;

/* nine selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, S5, R5, S6, R6, S7, R7, S8, R8, S9, R9, T>(
  selector1: Selector<S1, R1>,
  selector2: Selector<S2, R2>,
  selector3: Selector<S3, R3>,
  selector4: Selector<S4, R4>,
  selector5: Selector<S5, R5>,
  selector6: Selector<S6, R6>,
  selector7: Selector<S7, R7>,
  selector8: Selector<S8, R8>,
  selector9: Selector<S9, R9>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9) => T,
): OutputSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, S5, P5, R5, S6, P6, R6, S7, P7, R7, S8, P8, R8, S9, P9, R9, T>(
  selector1: ParametricSelector<S1, P1, R1>,
  selector2: ParametricSelector<S2, P2, R2>,
  selector3: ParametricSelector<S3, P3, R3>,
  selector4: ParametricSelector<S4, P4, R4>,
  selector5: ParametricSelector<S5, P5, R5>,
  selector6: ParametricSelector<S6, P6, R6>,
  selector7: ParametricSelector<S7, P7, R7>,
  selector8: ParametricSelector<S8, P8, R8>,
  selector9: ParametricSelector<S9, P9, R9>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9, P1 & P2 & P3 & P4 & P5 & P6 & P7 & P8 & P9, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9) => T>;

/* ten selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, S5, R5, S6, R6, S7, R7, S8, R8, S9, R9, S10, R10, T>(
  selector1: Selector<S1, R1>,
  selector2: Selector<S2, R2>,
  selector3: Selector<S3, R3>,
  selector4: Selector<S4, R4>,
  selector5: Selector<S5, R5>,
  selector6: Selector<S6, R6>,
  selector7: Selector<S7, R7>,
  selector8: Selector<S8, R8>,
  selector9: Selector<S9, R9>,
  selector10: Selector<S10, R10>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10) => T,
): OutputSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9 & S10, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, S5, P5, R5, S6, P6, R6, S7, P7, R7, S8, P8, R8, S9, P9, R9, S10, P10, R10, T>(
  selector1: ParametricSelector<S1, P1, R1>,
  selector2: ParametricSelector<S2, P2, R2>,
  selector3: ParametricSelector<S3, P3, R3>,
  selector4: ParametricSelector<S4, P4, R4>,
  selector5: ParametricSelector<S5, P5, R5>,
  selector6: ParametricSelector<S6, P6, R6>,
  selector7: ParametricSelector<S7, P7, R7>,
  selector8: ParametricSelector<S8, P8, R8>,
  selector9: ParametricSelector<S9, P9, R9>,
  selector10: ParametricSelector<S10, P10, R10>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9 & S10, P1 & P2 & P3 & P4 & P5 & P6 & P7 & P8 & P9 & P10, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10) => T>;

/* eleven selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, S5, R5, S6, R6, S7, R7, S8, R8, S9, R9, S10, R10, S11, R11, T>(
  selector1: Selector<S1, R1>,
  selector2: Selector<S2, R2>,
  selector3: Selector<S3, R3>,
  selector4: Selector<S4, R4>,
  selector5: Selector<S5, R5>,
  selector6: Selector<S6, R6>,
  selector7: Selector<S7, R7>,
  selector8: Selector<S8, R8>,
  selector9: Selector<S9, R9>,
  selector10: Selector<S10, R10>,
  selector11: Selector<S11, R11>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T,
): OutputSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9 & S10 & S11, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, S5, P5, R5, S6, P6, R6, S7, P7, R7, S8, P8, R8, S9, P9, R9, S10, P10, R10, S11, P11, R11, T>(
  selector1: ParametricSelector<S1, P1, R1>,
  selector2: ParametricSelector<S2, P2, R2>,
  selector3: ParametricSelector<S3, P3, R3>,
  selector4: ParametricSelector<S4, P4, R4>,
  selector5: ParametricSelector<S5, P5, R5>,
  selector6: ParametricSelector<S6, P6, R6>,
  selector7: ParametricSelector<S7, P7, R7>,
  selector8: ParametricSelector<S8, P8, R8>,
  selector9: ParametricSelector<S9, P9, R9>,
  selector10: ParametricSelector<S10, P10, R10>,
  selector11: ParametricSelector<S11, P11, R11>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9 & S10 & S11, P1 & P2 & P3 & P4 & P5 & P6 & P7 & P8 & P9 & P10 & P11, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T>;

/* twelve selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, S5, R5, S6, R6, S7, R7, S8, R8, S9, R9, S10, R10, S11, R11, S12, R12, T>(
  selector1: Selector<S1, R1>,
  selector2: Selector<S2, R2>,
  selector3: Selector<S3, R3>,
  selector4: Selector<S4, R4>,
  selector5: Selector<S5, R5>,
  selector6: Selector<S6, R6>,
  selector7: Selector<S7, R7>,
  selector8: Selector<S8, R8>,
  selector9: Selector<S9, R9>,
  selector10: Selector<S10, R10>,
  selector11: Selector<S11, R11>,
  selector12: Selector<S12, R12>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T,
): OutputSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9 & S10 & S11 & S12, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, S5, P5, R5, S6, P6, R6, S7, P7, R7, S8, P8, R8, S9, P9, R9, S10, P10, R10, S11, P11, R11, S12, P12, R12, T>(
  selector1: ParametricSelector<S1, P1, R1>,
  selector2: ParametricSelector<S2, P2, R2>,
  selector3: ParametricSelector<S3, P3, R3>,
  selector4: ParametricSelector<S4, P4, R4>,
  selector5: ParametricSelector<S5, P5, R5>,
  selector6: ParametricSelector<S6, P6, R6>,
  selector7: ParametricSelector<S7, P7, R7>,
  selector8: ParametricSelector<S8, P8, R8>,
  selector9: ParametricSelector<S9, P9, R9>,
  selector10: ParametricSelector<S10, P10, R10>,
  selector11: ParametricSelector<S11, P11, R11>,
  selector12: ParametricSelector<S12, P12, R12>,
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9 & S10 & S11 & S12, P1 & P2 & P3 & P4 & P5 & P6 & P7 & P8 & P9 & P10 & P11 & P12, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T>;


/* array argument */

/* one selector */
export function createSelector<S1, R1, T>(
  selectors: [Selector<S1, R1>],
  combiner: (res: R1) => T,
): OutputSelector<S1, T, (res: R1) => T>;
export function createSelector<S1, P1, R1, T>(
  selectors: [ParametricSelector<S1, P1, R1>],
  combiner: (res: R1) => T,
): OutputParametricSelector<S1, P1, T, (res: R1) => T>;

/* two selectors */
export function createSelector<S1, R1, S2, R2, T>(
  selectors: [Selector<S1, R1>,
              Selector<S2, R2>],
  combiner: (res1: R1, res2: R2) => T,
): OutputSelector<S1 & S2, T, (res1: R1, res2: R2) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, T>(
  selectors: [ParametricSelector<S1, P1, R1>,
              ParametricSelector<S2, P2, R2>],
  combiner: (res1: R1, res2: R2) => T,
): OutputParametricSelector<S1 & S2, P1 & P2, T, (res1: R1, res2: R2) => T>;

/* three selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, T>(
  selectors: [Selector<S1, R1>,
              Selector<S2, R2>,
              Selector<S3, R3>],
  combiner: (res1: R1, res2: R2, res3: R3) => T,
): OutputSelector<S1 & S2 & S3, T, (res1: R1, res2: R2, res3: R3) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, T>(
  selectors: [ParametricSelector<S1, P1, R1>,
              ParametricSelector<S2, P2, R2>,
              ParametricSelector<S3, P3, R3>],
  combiner: (res1: R1, res2: R2, res3: R3) => T,
): OutputParametricSelector<S1 & S2 & S3, P1 & P2 & P3, T, (res1: R1, res2: R2, res3: R3) => T>;

/* four selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, T>(
  selectors: [Selector<S1, R1>,
              Selector<S2, R2>,
              Selector<S3, R3>,
              Selector<S4, R4>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4) => T,
): OutputSelector<S1 & S2 & S3 & S4, T, (res1: R1, res2: R2, res3: R3, res4: R4) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, T>(
  selectors: [ParametricSelector<S1, P1, R1>,
              ParametricSelector<S2, P2, R2>,
              ParametricSelector<S3, P3, R3>,
              ParametricSelector<S4, P4, R4>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4, P1 & P2 & P3 & P4, T, (res1: R1, res2: R2, res3: R3, res4: R4) => T>;

/* five selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, S5, R5, T>(
  selectors: [Selector<S1, R1>,
              Selector<S2, R2>,
              Selector<S3, R3>,
              Selector<S4, R4>,
              Selector<S5, R5>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T,
): OutputSelector<S1 & S2 & S3 & S4 & S5, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, S5, P5, R5, T>(
  selectors: [ParametricSelector<S1, P1, R1>,
              ParametricSelector<S2, P2, R2>,
              ParametricSelector<S3, P3, R3>,
              ParametricSelector<S4, P4, R4>,
              ParametricSelector<S5, P5, R5>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4 & S5, P1 & P2 & P3 & P4 & P5, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T>;

/* six selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, S5, R5, S6, R6, T>(
  selectors: [Selector<S1, R1>,
              Selector<S2, R2>,
              Selector<S3, R3>,
              Selector<S4, R4>,
              Selector<S5, R5>,
              Selector<S6, R6>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T,
): OutputSelector<S1 & S2 & S3 & S4 & S5 & S6, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, S5, P5, R5, S6, P6, R6, T>(
  selectors: [ParametricSelector<S1, P1, R1>,
              ParametricSelector<S2, P2, R2>,
              ParametricSelector<S3, P3, R3>,
              ParametricSelector<S4, P4, R4>,
              ParametricSelector<S5, P5, R5>,
              ParametricSelector<S6, P6, R6>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4 & S5 & S6, P1 & P2 & P3 & P4 & P5 & P6, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T>;

/* seven selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, S5, R5, S6, R6, S7, R7, T>(
  selectors: [Selector<S1, R1>,
              Selector<S2, R2>,
              Selector<S3, R3>,
              Selector<S4, R4>,
              Selector<S5, R5>,
              Selector<S6, R6>,
              Selector<S7, R7>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T,
): OutputSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, S5, P5, R5, S6, P6, R6, S7, P7, R7, T>(
  selectors: [ParametricSelector<S1, P1, R1>,
              ParametricSelector<S2, P2, R2>,
              ParametricSelector<S3, P3, R3>,
              ParametricSelector<S4, P4, R4>,
              ParametricSelector<S5, P5, R5>,
              ParametricSelector<S6, P6, R6>,
              ParametricSelector<S7, P7, R7>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7, P1 & P2 & P3 & P4 & P5 & P6 & P7, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7) => T>;

/* eight selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, S5, R5, S6, R6, S7, R7, S8, R8, T>(
  selectors: [Selector<S1, R1>,
    Selector<S2, R2>,
    Selector<S3, R3>,
    Selector<S4, R4>,
    Selector<S5, R5>,
    Selector<S6, R6>,
    Selector<S7, R7>,
    Selector<S8, R8>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8) => T,
): OutputSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, S5, P5, R5, S6, P6, R6, S7, P7, R7, S8, P8, R8, T>(
  selectors: [ParametricSelector<S1, P1, R1>,
    ParametricSelector<S2, P2, R2>,
    ParametricSelector<S3, P3, R3>,
    ParametricSelector<S4, P4, R4>,
    ParametricSelector<S5, P5, R5>,
    ParametricSelector<S6, P6, R6>,
    ParametricSelector<S7, P7, R7>,
    ParametricSelector<S8, P8, R8>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8, P1 & P2 & P3 & P4 & P5 & P6 & P7 & P8, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8) => T>;

/* nine selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, S5, R5, S6, R6, S7, R7, S8, R8, S9, R9, T>(
  selectors: [Selector<S1, R1>,
    Selector<S2, R2>,
    Selector<S3, R3>,
    Selector<S4, R4>,
    Selector<S5, R5>,
    Selector<S6, R6>,
    Selector<S7, R7>,
    Selector<S8, R8>,
    Selector<S9, R9>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9) => T,
): OutputSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, S5, P5, R5, S6, P6, R6, S7, P7, R7, S8, P8, R8, S9, P9, R9, T>(
  selectors: [ParametricSelector<S1, P1, R1>,
    ParametricSelector<S2, P2, R2>,
    ParametricSelector<S3, P3, R3>,
    ParametricSelector<S4, P4, R4>,
    ParametricSelector<S5, P5, R5>,
    ParametricSelector<S6, P6, R6>,
    ParametricSelector<S7, P7, R7>,
    ParametricSelector<S8, P8, R8>,
    ParametricSelector<S9, P9, R9>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9, P1 & P2 & P3 & P4 & P5 & P6 & P7 & P8 & P9, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9) => T>;

/* ten selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, S5, R5, S6, R6, S7, R7, S8, R8, S9, R9, S10, R10, T>(
  selectors: [Selector<S1, R1>,
    Selector<S2, R2>,
    Selector<S3, R3>,
    Selector<S4, R4>,
    Selector<S5, R5>,
    Selector<S6, R6>,
    Selector<S7, R7>,
    Selector<S8, R8>,
    Selector<S9, R9>,
    Selector<S10, R10>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10) => T,
): OutputSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9 & S10, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, S5, P5, R5, S6, P6, R6, S7, P7, R7, S8, P8, R8, S9, P9, R9, S10, P10, R10, T>(
  selectors: [ParametricSelector<S1, P1, R1>,
    ParametricSelector<S2, P2, R2>,
    ParametricSelector<S3, P3, R3>,
    ParametricSelector<S4, P4, R4>,
    ParametricSelector<S5, P5, R5>,
    ParametricSelector<S6, P6, R6>,
    ParametricSelector<S7, P7, R7>,
    ParametricSelector<S8, P8, R8>,
    ParametricSelector<S9, P9, R9>,
    ParametricSelector<S10, P10, R10>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9 & S10, P1 & P2 & P3 & P4 & P5 & P6 & P7 & P8 & P9 & P10, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10) => T>;

/* eleven selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, S5, R5, S6, R6, S7, R7, S8, R8, S9, R9, S10, R10, S11, R11, T>(
  selectors: [Selector<S1, R1>,
    Selector<S2, R2>,
    Selector<S3, R3>,
    Selector<S4, R4>,
    Selector<S5, R5>,
    Selector<S6, R6>,
    Selector<S7, R7>,
    Selector<S8, R8>,
    Selector<S9, R9>,
    Selector<S10, R10>,
    Selector<S11, R11>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T,
): OutputSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9 & S10 & S11, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, S5, P5, R5, S6, P6, R6, S7, P7, R7, S8, P8, R8, S9, P9, R9, S10, P10, R10, S11, P11, R11, T>(
  selectors: [ParametricSelector<S1, P1, R1>,
    ParametricSelector<S2, P2, R2>,
    ParametricSelector<S3, P3, R3>,
    ParametricSelector<S4, P4, R4>,
    ParametricSelector<S5, P5, R5>,
    ParametricSelector<S6, P6, R6>,
    ParametricSelector<S7, P7, R7>,
    ParametricSelector<S8, P8, R8>,
    ParametricSelector<S9, P9, R9>,
    ParametricSelector<S10, P10, R10>,
    ParametricSelector<S11, P11, R11>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9 & S10 & S11, P1 & P2 & P3 & P4 & P5 & P6 & P7 & P8 & P9 & P10 & P11, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T>;

/* twelve selectors */
export function createSelector<S1, R1, S2, R2, S3, R3, S4, R4, S5, R5, S6, R6, S7, R7, S8, R8, S9, R9, S10, R10, S11, R11, S12, R12, T>(
  selectors: [Selector<S1, R1>,
    Selector<S2, R2>,
    Selector<S3, R3>,
    Selector<S4, R4>,
    Selector<S5, R5>,
    Selector<S6, R6>,
    Selector<S7, R7>,
    Selector<S8, R8>,
    Selector<S9, R9>,
    Selector<S10, R10>,
    Selector<S11, R11>,
    Selector<S12, R12>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T,
): OutputSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9 & S10 & S11 & S12, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T>;
export function createSelector<S1, P1, R1, S2, P2, R2, S3, P3, R3, S4, P4, R4, S5, P5, R5, S6, P6, R6, S7, P7, R7, S8, P8, R8, S9, P9, R9, S10, P10, R10, S11, P11, R11, S12, P12, R12, T>(
  selectors: [ParametricSelector<S1, P1, R1>,
    ParametricSelector<S2, P2, R2>,
    ParametricSelector<S3, P3, R3>,
    ParametricSelector<S4, P4, R4>,
    ParametricSelector<S5, P5, R5>,
    ParametricSelector<S6, P6, R6>,
    ParametricSelector<S7, P7, R7>,
    ParametricSelector<S8, P8, R8>,
    ParametricSelector<S9, P9, R9>,
    ParametricSelector<S10, P10, R10>,
    ParametricSelector<S11, P11, R11>,
    ParametricSelector<S12, P12, R12>],
  combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T,
): OutputParametricSelector<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9 & S10 & S11 & S12, P1 & P2 & P3 & P4 & P5 & P6 & P7 & P8 & P9 & P10 & P11 & P12, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6, res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T>;


export function defaultMemoize<F extends Function>(
  func: F, equalityCheck?: <T>(a: T, b: T, index: number) => boolean,
): F;

export function createSelectorCreator(
  memoize: <F extends Function>(func: F) => F,
): typeof createSelector;

export function createSelectorCreator<O1>(
  memoize: <F extends Function>(func: F,
                                option1: O1) => F,
  option1: O1,
): typeof createSelector;

export function createSelectorCreator<O1, O2>(
  memoize: <F extends Function>(func: F,
                                option1: O1,
                                option2: O2) => F,
  option1: O1,
  option2: O2,
): typeof createSelector;

export function createSelectorCreator<O1, O2, O3>(
  memoize: <F extends Function>(func: F,
                                option1: O1,
                                option2: O2,
                                option3: O3,
                                ...rest: any[]) => F,
  option1: O1,
  option2: O2,
  option3: O3,
  ...rest: any[],
): typeof createSelector;

export function createStructuredSelector<S, T>(
  selectors: {[K in keyof T]: Selector<S, T[K]>},
  selectorCreator?: typeof createSelector,
): Selector<S, T>;

export function createStructuredSelector<S, P, T>(
  selectors: {[K in keyof T]: ParametricSelector<S, P, T[K]>},
  selectorCreator?: typeof createSelector,
): ParametricSelector<S, P, T>;
