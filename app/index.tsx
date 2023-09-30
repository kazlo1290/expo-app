import { Link } from 'expo-router';
import Head from 'expo-router/head';
import { View } from 'react-native';
//
import { HomeScreen } from 'screens/HomeScreen';
//
export default function Page() {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="description" content="My App description" />
      </Head>
      <HomeScreen />
      <View>
        <Link
          replace
          href={{
            pathname: '/user/[id]',
            params: { id: 'bacon' },
          }}
        >
          View user
        </Link>
        <Link replace href="/user">
          Link user
        </Link>
      </View>
    </>
  );
}
