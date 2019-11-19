import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
} from 'react-native';


import Input from './src/input';

export default function App() {
  const [minNota, setMinNota] = React.useState('11.5');

  const [p1, setNota1] = React.useState('');
  const [parcial, setNota2] = React.useState('');
  const [p2, setNota3] = React.useState('');

  const [notaFinal, setNotaFinal] = React.useState(null);


  function submit() {
    const resul =  (parseFloat(minNota) - (parseFloat(p1)*0.2+parseFloat(parcial)*0.3+parseFloat(p2)*0.2))/0.3;
    setNotaFinal(resul);
  }

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={{ alignContent: 'center', justifyContent: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Calculadora UCSP </Text>
        </View>
        <View>
          <Input label="Aprobar con" value={minNota} onChangeText={setMinNota} />
          <Input label="Permanente 1" value={p1} onChangeText={setNota1} />
          <Input label="Parcial" value={parcial} onChangeText={setNota2} />
          <Input label="Permanente 2" value={p2} onChangeText={setNota3} />
          <Button title="Calcular" onPress={submit} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Necesitas
          {notaFinal !== null && (
            <React.Fragment>
              {notaFinal > 20 ? (
                <Text style={{ color: 'red' }}>{notaFinal}</Text>
              ) : (
                <Text style={{ color: 'blue' }}>{notaFinal}</Text>
              )}
            </React.Fragment>
          )}
          para aprobar    </Text>
        </View>
      </View>

    </React.Fragment>
  );
}


const styles = StyleSheet.create({
  row: {
    flex: 1,
    backgroundColor: '#ffffee',
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    height: '100%',
    backgroundColor: 'blue',
    marginHorizontal: 10,
  },
  container: {
    padding: 25,
  },
});
