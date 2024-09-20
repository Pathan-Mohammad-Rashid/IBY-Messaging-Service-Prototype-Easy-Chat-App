import ChatBox from '@/components/ChatBox';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Messaging App</h1>
      <Link href="/login" legacyBehavior><a>Login</a></Link>
      <ChatBox />
    </div>
  );
}
