import { Suspense } from "react";

import { NestedComponent } from "./nested-component";
import { LoadingNestedComponent } from "./loading-nested-component";

export const dynamic = "force-dynamic";

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
