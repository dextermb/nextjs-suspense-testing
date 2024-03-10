import 'server-only'

export async function loadData() {
  await new Promise(resolve => setTimeout(resolve, 5_000))

  return true
}
