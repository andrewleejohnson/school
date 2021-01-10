import React from 'react'
import { Comment as CommentType } from 'Post/types'
import Comment from 'Post/Item/CommentsModal/Comments/Comment'

type Props = {
  comments: CommentType[]
  level?: number
}

export default function Comments({ comments, level = 0 }: Props) {
  return (
    <>
      {comments.map((comment, i) => (
        <Comment key={i} comment={comment} level={level} />
      ))}
    </>
  )
}