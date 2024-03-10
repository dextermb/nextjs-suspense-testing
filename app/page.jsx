import { Suspense } from "react";

import { NestedComponent } from "./nested-component";
import { LoadingNestedComponent } from "./loading-nested-component";

export default function Page() {
  return (
    <>
      <p>Hello, world!</p>
      <Suspense fallback={<LoadingNestedComponent />}>
        <NestedComponent />
      </Suspense>
    </>
  )
}
