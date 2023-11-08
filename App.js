import React, { useRef } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default function App() {
  const cameraRef = useRef(null);

  const tirarFoto = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);

      // Enviar a imagem para a API para processamento (ainda precisa ser implementado)
      console.log('Imagem capturada:', data.uri);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      />
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <Button title="Tirar Foto" onPress={tirarFoto} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
