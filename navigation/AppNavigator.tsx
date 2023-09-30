import { Link, Slot } from 'expo-router';

export const WebNavigator = () => {
  return (
    <div style={{ flex: 1 }}>
      <header>
        <Link href="/">Home</Link>
        <Link href="/settings">Settings</Link>
      </header>
      <Slot />
    </div>
  );
};
