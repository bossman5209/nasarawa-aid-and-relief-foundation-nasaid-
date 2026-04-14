# Plan to fix React Error #321 in ImpactStats.tsx

The error "Invalid hook call" is caused by calling the `useSpring` hook inside a callback function (the IntersectionObserver callback) within a `useEffect` hook in `src/components/ImpactStats.tsx`.

## Steps:
1. Modify `src/components/ImpactStats.tsx`:
   - Move the `useSpring` hook call from the `useEffect` callback to the top level of the `Counter` component.
   - Use the `spring` value for the animation.
   - Update the `spring` target value inside the `useEffect` when the element is intersecting.
2. Validate the fix by running `validate_build`.
