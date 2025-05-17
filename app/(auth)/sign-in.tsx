import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '~/constants'
import InputField from '~/components/InputField'
import CustomButton from '~/components/CustomButton'
import { Link, router } from 'expo-router'
import OAuth from '~/components/OAuth'
import { useSignIn } from '@clerk/clerk-expo'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const { signIn, setActive, isLoaded } = useSignIn();

  const onSignInPress = async () => {
    if (!isLoaded) return

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/')
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <ScrollView className='flex-1 bg-white'>
      <View className='flex-1 bg-white'>
        <View className='relative w-full h-[200px]'>
          <Image source={images.signUpCar} className='z-0 w-full h-[200px]'/>
          <Text className='text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5'>Welcome 👋</Text>
        </View>
        <View className='p-5'>          
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value: string) =>
              setForm({
                ...form,
                email: value
              })
            }
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            secureTextEntry={true}
            onChangeText={(value: string) =>
              setForm({
                ...form,
                password: value
              })
            }
          />
          <CustomButton
            title='Sign In'
            onPress={onSignInPress}
            className='mt-6'
          />
          {/* OAuth */}
          <OAuth />
          <Link href="/(auth)/sign-up" className='text-lg text-center text-general-200 mt-9'>
            <Text>Don't have an Account? </Text>
            <Text className='text-primary-500'>Sign Up</Text>
          </Link>
        </View>
        {/* verification Modal */}
      </View>
    </ScrollView>
  )
}

export default SignIn;