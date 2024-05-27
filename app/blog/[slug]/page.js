export default function Page({ params }) {
  console.log('props==>', params);
  return <div>Blog Page { JSON.stringify(params) }</div>
}