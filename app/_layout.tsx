import { ThemeProvider, DefaultTheme } from '@react-navigation/native';
//
import { WebNavigator } from 'navigation/AppNavigator';
import { NativeNavigator } from 'navigation/AppNavigator.native';
import { Platform } from 'react-native';

export default function Layout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      {Platform.OS === 'web' ? <WebNavigator /> : <NativeNavigator />}
    </ThemeProvider>
  );
}
