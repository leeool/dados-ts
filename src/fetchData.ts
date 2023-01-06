export default async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const request = await fetch(url)
    if (!request.ok) throw new Error("Erro" + request.status)
    const json = await request.json()
    return json
  } catch (e) {
    if (e instanceof Error) {
      console.error("fetch data: " + e.message)
    }
    return null
  }
}
