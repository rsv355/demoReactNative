import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modelContainer: {
    width: '100%',
    marginLeft: 0,
    marginBottom: 0
  },
  modelSubContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 300,
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10
  },
  button: {
    marginLeft: 10,
    marginTop: 16,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4fb28f',
    borderRadius: 10,
  },
  buttonTitle: {
    marginTop: 12,
    marginBottom: 12,
    color: '#ffffff',
    fontSize: 14,
    alignItems: 'center'

  },
  direction: {
    width: '22%',
    marginTop: 16,
    fontSize: 14,
    color: '#000000',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
  },
  line: {
    marginTop: 14,
    marginBottom: 10,
    backgroundColor: '#d9d9d9',
    height: 1,
    width: '100%',
  },
  hoursHeading: {
    fontSize: 10,
    color: '#706d6d',
    marginLeft: 10,
  },
  hoursHeading2: {
    marginTop: 10,
    fontSize: 10,
    color: '#706d6d',
    marginLeft: 10,
  },
  content: {
    fontSize: 14,
    color: '#000000',
    marginLeft: 10,
    fontWeight: "bold"
  },
  profileImage: {
    alignSelf: "flex-end",
    position: "absolute",
    height: 80,
    width: 80,
    marginTop: 16,
  },
  storeNameTitle: {
    marginLeft: 10,
    marginTop: 16,
    fontSize: 14,
    color: '#000000'
  }
});