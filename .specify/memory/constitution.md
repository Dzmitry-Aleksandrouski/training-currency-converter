<!--
  Sync Impact Report
  ===================
  Version change: N/A → 1.0.0 (initial creation)
  
  Added Principles:
  - P1: Code Quality
  - P2: Testing Standards
  - P3: Accessibility
  
  Added Sections:
  - Preamble
  - Principles (3 principles)
  - Governance
  
  Removed Sections: None (initial creation)
  
  Templates Alignment:
  - .specify/templates/plan-template.md: ✅ Compatible (Constitution Check section exists)
  - .specify/templates/spec-template.md: ✅ Compatible (Constitution Check section exists)
  - .specify/templates/tasks-template.md: ✅ Compatible (test-first approach aligned)
  
  Follow-up TODOs: None
-->

# Project Constitution

**Project Name**: Currency Converter  
**Constitution Version**: 1.0.0  
**Ratification Date**: 2025-12-12  
**Last Amended Date**: 2025-12-12

---

## Preamble

This constitution defines the non-negotiable standards and principles that govern
all development within the Currency Converter project. These principles ensure
consistent code quality, reliable testing practices, and inclusive user experiences.
All contributors, including AI assistants, MUST adhere to these principles.

---

## Principles

### P1: Code Quality

All code submitted to this repository MUST meet the following quality standards:

1. **Linting**: All code MUST pass ESLint checks with zero errors. Warnings SHOULD
   be resolved before merge; unresolved warnings MUST be documented with justification.

2. **Type Safety**: TypeScript strict mode MUST be enabled. All code MUST pass
   `tsc --noEmit` with zero errors. Use of `any` type is PROHIBITED except when
   interfacing with untyped third-party libraries (must be documented).

3. **Formatting**: All code MUST be formatted according to project Prettier
   configuration. Format MUST be verified before commit.

4. **Code Review**: All changes MUST be submitted via pull request and MUST pass
   CI checks before merge. Direct commits to main branch are PROHIBITED.

5. **Complexity**: Functions SHOULD NOT exceed 50 lines. Cyclomatic complexity
   SHOULD NOT exceed 10. Violations MUST be justified in PR description.

**Rationale**: Consistent code quality reduces bugs, improves maintainability,
and enables efficient collaboration across human and AI contributors.

---

### P2: Testing Standards

All code changes MUST adhere to the following testing requirements:

1. **Coverage Threshold**: The repository MUST maintain a minimum of 80% code
   coverage overall. Critical utilities (utils/, hooks/) MUST maintain 90% coverage.

2. **Test Requirements**:
   - All new features MUST include unit tests covering happy path and error cases.
   - All bug fixes MUST include a regression test that fails before the fix.
   - Integration tests MUST be added for cross-component interactions.
   - API routes MUST have contract tests verifying request/response shapes.

3. **Test Quality**:
   - Tests MUST be behavior-focused, not implementation-focused.
   - Test names MUST describe the expected behavior clearly.
   - Tests MUST NOT depend on execution order.
   - Mock data MUST be realistic and representative.

4. **Test Execution**:
   - All tests MUST pass locally before PR submission.
   - All tests MUST pass in CI before merge.
   - Flaky tests MUST be fixed or quarantined within 24 hours of detection.

5. **Test-First Approach**: For new features, tests SHOULD be written first and
   MUST fail before implementation begins (TDD encouraged).

**Rationale**: Comprehensive testing ensures reliability, enables confident
refactoring, and documents expected behavior for future maintainers.

---

### P3: Accessibility

All user-facing features MUST comply with WCAG 2.1 Level AA standards:

1. **Perceivable**:
   - All images MUST have meaningful alt text (or empty alt for decorative).
   - Color contrast MUST meet 4.5:1 ratio for normal text, 3:1 for large text.
   - Text MUST be resizable up to 200% without loss of functionality.
   - No information MUST be conveyed by color alone.

2. **Operable**:
   - All interactive elements MUST be keyboard accessible.
   - Focus order MUST be logical and predictable.
   - Focus indicators MUST be visible (no `outline: none` without alternative).
   - No keyboard traps; users MUST be able to navigate away from any component.

3. **Understandable**:
   - Form inputs MUST have associated labels.
   - Error messages MUST clearly identify the problem and suggest correction.
   - Language MUST be declared in HTML (`lang` attribute).
   - Navigation MUST be consistent across pages.

4. **Robust**:
   - Semantic HTML elements MUST be used appropriately.
   - ARIA attributes MUST be used correctly when semantic HTML is insufficient.
   - Components MUST work with assistive technologies (screen readers, voice control).

5. **Testing**:
   - Manual keyboard navigation testing MUST be performed for new features.
   - Automated accessibility testing (axe-core or similar) SHOULD be integrated.
   - Screen reader testing SHOULD be performed for complex interactions.

**Rationale**: Accessibility ensures the application is usable by everyone,
including users with disabilities, and improves overall user experience.

---

## Governance

### Amendment Procedure

1. **Proposal**: Any contributor may propose amendments by opening a GitHub issue
   with the `constitution` label.

2. **Discussion**: Proposals MUST be open for discussion for at least 48 hours
   before approval.

3. **Approval**: Amendments require approval from at least one project maintainer.

4. **Implementation**: Approved amendments MUST be implemented within one week
   and reflected in this document.

### Versioning Policy

This constitution follows semantic versioning:

- **MAJOR** (X.0.0): Backward-incompatible governance changes, principle removals,
  or fundamental redefinitions.
- **MINOR** (0.X.0): New principles added, existing principles materially expanded,
  new sections introduced.
- **PATCH** (0.0.X): Clarifications, wording improvements, typo fixes,
  non-semantic refinements.

### Compliance Review

1. **PR Review**: Every pull request MUST include a Constitution Check section
   documenting compliance with applicable principles.

2. **Periodic Audit**: The codebase SHOULD be audited quarterly for constitution
   compliance.

3. **Violations**: Discovered violations MUST be logged as GitHub issues and
   prioritized for remediation.

4. **Exemptions**: Temporary exemptions MAY be granted by maintainers with
   documented justification and remediation timeline.

---

## Appendix: Quick Reference

| Principle | Key Metric | Enforcement |
|-----------|------------|-------------|
| Code Quality | Zero lint/type errors | CI blocks merge |
| Testing | 80% coverage (90% critical) | CI coverage gate |
| Accessibility | WCAG 2.1 AA | Manual + automated checks |
