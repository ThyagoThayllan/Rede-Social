import { Post } from './components/Post/Post'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/thyagothayllan.png',
      name: 'Thyago Thayllan',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Olá, meu nome é Thyago Thayllan.' },
      { type: 'paragraph', content: 'Atualmente, estou estudando React.' },
      { type: 'paragraph', content: 'Tenho a meta de conseguir uma vaga de estágio até antes do meio do próximo ano.' },
      { type: 'link', content: 'GitHub' }
    ],
    publishedAt: new Date('2023-09-09 15:45:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/thallesrayan.png',
      name: 'Thalles Rayan',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Olá, meu nome é Thalles Rayan.' },
      { type: 'paragraph', content: 'Atualmente, estou estudando React.' },
      { type: 'paragraph', content: 'Tenho a meta de conseguir uma vaga de estágio até antes do meio do próximo ano.' },
      { type: 'link', content: 'GitHub' }
    ],
    publishedAt: new Date('2023-09-10 15:45:00')
  },
]

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
