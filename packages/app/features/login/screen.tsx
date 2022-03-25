import { Text, useSx, View, H1, P, Row, A, Image } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window')

export function LoginScreen() {
  const sx = useSx()

  const isMobile = width < height

  console.log(isMobile)

  function FormLogin() {
    return (
      <View
        sx={{
          flex: 1,
          width: '100%',
          p: 24,
        }}
      >
        <H1 sx={{ fontWeight: '800', color: isMobile ? 'white' : 'black' }}>
          Login
        </H1>
        <Row
          sx={{
            backgroundColor: 'white',
            width: '100%',
            pt: 16,
            pb: 12,
            pl: 16,
            pr: 16,
            borderRadius: 12,
            marginBottom: 16,
            color: 'black',
          }}
        >
          <TextInput
            placeholder="E-mail"
            style={{ width: '100%' }}
            keyboardType="email-address"
          />
        </Row>
        <Row
          sx={{
            backgroundColor: 'white',
            width: '100%',
            pt: 16,
            pb: 12,
            pl: 16,
            pr: 16,
            borderRadius: 12,
            marginBottom: 16,
            color: 'black',
          }}
        >
          <TextInput
            placeholder="Password"
            style={{ width: '100%' }}
            secureTextEntry={true}
          />
        </Row>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderRadius: 12,
          }}
        >
          <P sx={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
            Login
          </P>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <>
      <View sx={{ flex: 1, alignItems: 'center' }}>
        {isMobile ? (
          <ImageBackground
            source={require('../../assets/marvin-meyer-unsplash.jpg')}
            style={{ width: '100%', height: '100%' }}
          >
            <View
              sx={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                pb: 32,
                backgroundColor: 'rgba(0,0,0, 0.24)',
              }}
            >
              {FormLogin()}
            </View>
          </ImageBackground>
        ) : (
          <Row sx={{ flex: 1, alignItems: 'center', width: '100%' }}>
            <Image
              source={require('../../assets/marvin-meyer-unsplash.jpg')}
              style={{ width: '50%', height: '100%' }}
            />
            {FormLogin()}
          </Row>
        )}
      </View>
    </>
  )
}
