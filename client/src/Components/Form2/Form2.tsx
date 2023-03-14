import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { fetchPropertiesId } from "../../Redux/reducer/Properties";
import { RootState } from "../../Redux/store";
import { ThunkDispatch } from "redux-thunk";
import Property from "../../Interfaces/Property";
import {
  fetchCategory,
  fetchCondition,
  fetchCountry,
  fetchGarden,
  fetchServices,
  fetchState,
} from "../../Redux/reducer/Tables";
import {
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Button,
  Stack,
  Center,
  GridItem,
  Text,
  Select,
} from "@chakra-ui/react";

interface ItemDetailsProps {
  state: {
    itemProp: {
      id: string;
      title: string;
      antiquity: number;
      address: string;
      bedrooms: number;
      bathrooms: number;
      environments: number;
      pool: boolean;
      elevator: boolean;
      floor_th: number;
      orientation: string;
      m2_totals: number;
      m2_covered: number;
      garage: boolean;
      amenities: boolean;
      description: string;
      furnished: boolean;
      balcony: boolean;
      sign: boolean;
      firstImage: string;
      lat: any;
      long: any;
    };
  };
}

function Form2({ location }: { location: ItemDetailsProps }) {
  const itemProp2 = location.state.itemProp.id;
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const [category, setCategory] = useState<any>([]);
  const [condition, setCondition] = useState([]);
  const [state, setState] = useState([]);
  const [country, setCountry] = useState([]);
  const [garden, setGarden] = useState([]);
  const [services, setServices] = useState([]);

  const [categorySelected, setCategorySelected] = useState("");
  const [conditionSelected, setConditionSelected] = useState("");
  const [stateSelected, setStateSelected] = useState("");
  const [countrySelected, setCountrySelected] = useState("");
  const [gardenSelected, setGardenSelected] = useState("");
  const [servicesSelected, setServicesSelected] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    dispatch(fetchCategory())
      .then((action) => {
        if (action.payload) {
          setCategory(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching categories:", error);
      });
    dispatch(fetchCondition())
      .then((action) => {
        if (action.payload) {
          setCondition(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching conditions:", error);
      });
    dispatch(fetchCountry())
      .then((action) => {
        if (action.payload) {
          setCountry(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching countries:", error);
      });
    dispatch(fetchGarden())
      .then((action) => {
        if (action.payload) {
          setGarden(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching gardens:", error);
      });
    dispatch(fetchServices())
      .then((action) => {
        if (action.payload) {
          setServices(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching services:", error);
      });
    dispatch(fetchState())
      .then((action) => {
        if (action.payload) {
          setState(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching states:", error);
      });
  }, [dispatch]);

  console.log([
    countrySelected,
    categorySelected,
    stateSelected,
    gardenSelected,
    servicesSelected,
    conditionSelected,
  ]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const propertyCondition = {
        PropertyId: itemProp2.toString(),
        ConditionId: Number(conditionSelected),
      };
      const propertyCountry = {
        PropertyId: itemProp2.toString(),
        CountryId: Number(countrySelected),
      };
      const propertyState = {
        PropertyId: itemProp2.toString(),
        StateId: Number(stateSelected),
      };
      const propertyGarden = {
        PropertyId: itemProp2.toString(),
        GardenId: Number(gardenSelected),
      };
      const propertyServices = {
        PropertyId: itemProp2.toString(),
        ServiceId: Number(servicesSelected),
      };
      const propertyCategory = {
        PropertyId: itemProp2.toString(),
        CategoryId: Number(categorySelected),
      };
      // const response = await dispatch(createProperty());
      // const createdProperty = response.payload; // assuming response payload is the created property
      // setIsSubmitting(false);
    } catch (error) {
      console.log("Error creating properties:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <Center my={4}>
      <form onSubmit={handleSubmit}>
        <Select
          value={categorySelected}
          onChange={(e) => setCategorySelected(e.target.value)}
        >
          <option value="" disabled>
            Seleccione una opción
          </option>
          {category.map(
            (opcion: { id: number; category_name: any | null | undefined }) => (
              <option key={opcion.id} value={opcion.id}>
                {opcion.category_name}
              </option>
            )
          )}
        </Select>
        <Select
          value={conditionSelected}
          onChange={(e) => setConditionSelected(e.target.value)}
        >
          <option value="" disabled>
            Seleccione una opción
          </option>
          {condition.map(
            (opcion: {
              id: number;
              condition_name: any | null | undefined;
            }) => (
              <option key={opcion.id} value={opcion.id}>
                {opcion.condition_name}
              </option>
            )
          )}
        </Select>
        <Select
          value={stateSelected}
          onChange={(e) => setStateSelected(e.target.value)}
        >
          <option value="" disabled>
            Seleccione una opción
          </option>
          {state.map(
            (opcion: { id: number; state_name: any | null | undefined }) => (
              <option key={opcion.id} value={opcion.id}>
                {opcion.state_name}
              </option>
            )
          )}
        </Select>
        <Select
          value={gardenSelected}
          onChange={(e) => setGardenSelected(e.target.value)}
        >
          <option value="" disabled>
            Seleccione una opción
          </option>
          {garden.map(
            (opcion: { id: number; garden_name: any | null | undefined }) => (
              <option key={opcion.id} value={opcion.id}>
                {opcion.garden_name}
              </option>
            )
          )}
        </Select>
        <Select
          value={servicesSelected}
          onChange={(e) => setServicesSelected(e.target.value)}
        >
          <option value="" disabled>
            Seleccione una opción
          </option>
          {services.map(
            (opcion: { id: number; services_name: any | null | undefined }) => (
              <option key={opcion.id} value={opcion.id}>
                {opcion.services_name}
              </option>
            )
          )}
        </Select>
        <Select
          value={countrySelected}
          onChange={(e) => setCountrySelected(e.target.value)}
        >
          <option value="" disabled>
            Seleccione una opción
          </option>
          {country.map(
            (opcion: { id: number; country_name: any | null | undefined }) => (
              <option key={opcion.id} value={opcion.id}>
                {opcion.country_name}
              </option>
            )
          )}
        </Select>
        <Button
          type="submit"
          isLoading={isSubmitting}
          loadingText="Submitting..."
          width={500}
          my={10}
        >
          Crear
        </Button>
      </form>
    </Center>
  );
}

export default Form2;
