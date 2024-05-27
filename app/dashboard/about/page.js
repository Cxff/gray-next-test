async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return {
    message: 'Hello from server'
  }
}

export default async function Page() {
  const { message } = await getData()
  return <h1>About -- { message }</h1>
}