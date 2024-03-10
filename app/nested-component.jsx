import { loadData } from "@/actions/load-data"

export async function NestedComponent() {
  const data = await loadData()

  return (
    <div className="p-4 border border-stone-300">
      <p>Data has loaded</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
