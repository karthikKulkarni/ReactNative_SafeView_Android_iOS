# RN_SafeView_Android_iOS

A simple implementation to understand the effective usable area for React Native using SaveViewArea concept of iOS.
Thanks to [@janicduplessis](https://github.com/janicduplessis) for [react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context) package which hides lots of boiler plate code to achieve the same in Android as well.

Additionally a little tweak in Android app/MainActivity.java to make the StatusBar and NavigationBar translucent.

#### Things to note:

##### 1. Android

To make the StatusBar and NavigationBar translucent, make the following changes in android/app/src/...MainActivity.java

Add Layout Props for the Window:

```
@Override
  protected void onCreate(Bundle savedInstanceState) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            WindowManager.LayoutParams layoutParams = new WindowManager.LayoutParams();
            layoutParams.layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            getWindow().setAttributes(layoutParams);
            getWindow().addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
            getWindow().addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
        }
        super.onCreate(savedInstanceState);
  }
```

Note : **WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS** & **WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION**

##### 2. React Native

Below code snippet explains minimal implementation of SafeViewArea using _react-native-safe-area-context_.

```
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
...
const App = () => {
  return (
      <SafeAreaProvider>

        <StatusBar .../>

        <SafeAreaView style={{ flex: 1 }}>
          <View style={ ... }>
          ... Something ...
            <Text style={styles.txt}>
              Inside the Yellow border is effective usable area.
            </Text>
          </View>
        </SafeAreaView>

      </SafeAreaProvider>
  );
};

export default App;

```

| Android                                                  |                         iOS                          |
| -------------------------------------------------------- | :--------------------------------------------------: |
| <img src="androidrotation.gif" width="400" height="400"> | <img src="iosrotation.gif" width="400" height="400"> |
