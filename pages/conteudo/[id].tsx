export async function getStaticProps(context: { params: { id: string }}) {
  const { params } = context
  return { props: { id: params.id }}
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}
export default function ConteudoItem({ id }: { id: string }) {
  return (
    <>
      <div>Conteudo específico</div>
      <div>ID da página: {id}</div>
    </>
  )
}