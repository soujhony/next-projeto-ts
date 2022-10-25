import { IPost } from '../../types';

interface Props {
  post: IPost
}

export default function Post({ post }: Props) {
  return (
    <li>
      <img src={post.cover} width="800" alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </li>
  )
}