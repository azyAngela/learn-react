// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './qcomps/profile_mistake'
import MyComp from './qcomps/firstcomp'
import Bios from './qcomps/bios'
import TodoList from './qcomps/todos'
import ProfilePros from './components/profile_props'
import PackingList from './components/props_item'
import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'
import Gallery from './qcomps/state'
import StuckForm from './qcomps/stuckForm'
import FeedbackForm from './qcomps/thankYouCrash'

export default function Home() {
  return (
    <div className={styles.main}>
        {/* <Profile /> */}
        {/* <MyComp /> */}
        {/* <Bios /> */}
        {/* <TodoList /> */}
        {/* <ProfilePros /> */}
        {/* <Gallery /> */}
        {/* <PackingList /> */}
        {/* <List /> */}
        {/* <RecipeList /> */}
        {/* <Gallery /> */}
        {/* <StuckForm /> */}
        <FeedbackForm />

    </div>
  )
}
