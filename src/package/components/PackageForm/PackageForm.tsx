import {
  Card,
  CardContent,
  Divider,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField
} from "@material-ui/core";
import CardSpacer from "@saleor/components/CardSpacer";
import CardTitle from "@saleor/components/CardTitle";
import { ConfirmButtonTransitionState } from "@saleor/components/ConfirmButton";
import Form from "@saleor/components/Form";
import SaveButtonBar from "@saleor/components/SaveButtonBar";
import SingleAutocompleteSelectField from "@saleor/components/SingleAutocompleteSelectField";
import useStateFromProps from "@saleor/hooks/useStateFromProps";
import { maybe } from "@saleor/misc";
import { PackageDetails_package } from "@saleor/package/types/PackageDetails";
import { getChoices } from "@saleor/products/utils/data";
import { FetchMoreProps } from "@saleor/types";
import { PackageNetOrGross } from "@saleor/types/globalTypes";
import { getFormErrors } from "@saleor/utils/errors";
import createSingleAutocompleteSelectHandler from "@saleor/utils/handlers/singleAutocompleteSelectChangeHandler";
import React from "react";
import { useIntl } from "react-intl";

// import SelectGaduur from "../PackageDetailsPage/SelectGaduur";

export interface PackageFormProps {
  disabled: boolean;
  errors: any;
  gaduurs: any;
  fetchMoreGaduurs: FetchMoreProps;
  fetchGaduurs: (query: string) => void;
  object: PackageDetails_package | null;
  onBack: () => void;
  onDelete: () => void | null;
  onSubmit: (data: PackageFormData) => void;
  saveButtonBarState: ConfirmButtonTransitionState;
}

export interface PackageFormData {
  gaduur: string;
  name: string;
  width: number;
  height: number;
  length: number;
  netWeight: number;
  grossWeight: number;
  perkgAmount: number;
  netOrGross: string;
}

export interface ChangeEvent<TData = any> {
  target: {
    name: string;
    value: TData;
  };
}

const PackageForm: React.FC<PackageFormProps> = ({
  disabled,
  errors,
  gaduurs: gaduurChoiceList,
  fetchMoreGaduurs,
  fetchGaduurs,
  object,
  onBack,
  onDelete,
  onSubmit,
  saveButtonBarState
}) => {
  const intl = useIntl();
  const gaduurs = getChoices(gaduurChoiceList);
  const [selectedGaduur, setSelectedGaduur] = useStateFromProps(
    maybe(() => object?.gaduur.name, "")
  );

  const initialForm: PackageFormData = {
    gaduur: maybe(() => object?.gaduur.id, ""),
    grossWeight: maybe(() => object?.grossWeight, 0),
    height: maybe(() => object?.height, 0),
    length: maybe(() => object?.length, 0),
    name: maybe(() => object?.name, ""),
    netOrGross: maybe(() => object?.netOrGross, PackageNetOrGross.NET),
    netWeight: maybe(() => object?.netWeight, 0),
    perkgAmount: maybe(() => object?.perkgAmount, 8),
    width: maybe(() => object?.width, 0)
  };

  const calcOvor = (e: ChangeEvent, change, data: PackageFormData) => {
    change(e);
    const name = "grossWeight";
    const multiple =
      e.target.name === "length"
        ? e.target.value * data.height * data.width
        : e.target.name === "height"
        ? e.target.value * data.length * data.width
        : e.target.value * data.length * data.height;

    const value = (multiple / 6000).toFixed(2);
    return change({ target: { name, value } });
  };

  const formErrors = getFormErrors(
    [
      "name",
      "width",
      "height",
      "length",
      "netWeight",
      "gaduur",
      "grossWeight",
      "perkgAmount",
      "netOrGross"
    ],
    errors
  );

  return (
    <Form initial={initialForm} onSubmit={onSubmit}>
      {({ change, data, submit }) => {
        const handleGaduurSelect = createSingleAutocompleteSelectHandler(
          change,
          setSelectedGaduur,
          gaduurs
        );
        return (
          <Card data-test="packageInfoSection">
            <CardTitle title="Илгээмжийн мэдээлэл" />
            <CardContent>
              <SingleAutocompleteSelectField
                displayValue={selectedGaduur}
                error={!!formErrors.gaduur}
                disabled={disabled}
                label={intl.formatMessage({
                  defaultMessage: "Гадуур дагавар"
                })}
                choices={disabled ? [] : gaduurs}
                name="gaduur"
                value={data.gaduur}
                onChange={handleGaduurSelect}
                fetchChoices={fetchGaduurs}
                data-test="category"
                {...fetchMoreGaduurs}
              />
              <CardSpacer />
              {/* {!object && (
                <SelectGaduur
                  gaduurs={
                    gaduurs
                      .map(edge => edge.node)
                      .map(g => ({
                        label: g.name,
                        value: g.id
                      })) || [{ label: "", value: "" }]
                  }
                  data={data}
                  change={change}
                  formErrors={formErrors}
                />

              )} */}

              <TextField
                disabled={disabled}
                error={!!formErrors.name}
                fullWidth
                label={intl.formatMessage({
                  defaultMessage: "Илгээмжийн дугаар"
                })}
                name={"name" as keyof typeof data}
                value={data.name}
                onChange={change}
              />
              <CardSpacer />
              <Divider />
              <CardSpacer />

              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-width">
                  {intl.formatMessage({
                    defaultMessage: "Өргөн"
                  })}
                </InputLabel>
                <OutlinedInput
                  id="outlined-width"
                  disabled={disabled}
                  type="number"
                  error={!!formErrors.width}
                  name={"width" as keyof typeof data}
                  value={data.width}
                  onChange={e => calcOvor(e, change, data)}
                  endAdornment={
                    <InputAdornment position="start">cm</InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>
              <CardSpacer />

              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-height">
                  {intl.formatMessage({
                    defaultMessage: "Өндөр"
                  })}
                </InputLabel>
                <OutlinedInput
                  id="outlined-height"
                  disabled={disabled}
                  type="number"
                  error={!!formErrors.height}
                  name={"height" as keyof typeof data}
                  value={data.height}
                  onChange={e => calcOvor(e, change, data)}
                  endAdornment={
                    <InputAdornment position="start">cm</InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>
              <CardSpacer />

              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-length">
                  {intl.formatMessage({
                    defaultMessage: "Урт"
                  })}
                </InputLabel>
                <OutlinedInput
                  id="outlined-length"
                  disabled={disabled}
                  type="number"
                  error={!!formErrors.length}
                  name={"length" as keyof typeof data}
                  value={data.length}
                  onChange={e => calcOvor(e, change, data)}
                  endAdornment={
                    <InputAdornment position="start">cm</InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>
              <CardSpacer />
              <Divider />
              <CardSpacer />

              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-netWeight">
                  {intl.formatMessage({
                    defaultMessage: "Цэвэр жин"
                  })}
                </InputLabel>
                <OutlinedInput
                  id="outlined-netWeight"
                  disabled={disabled}
                  type="number"
                  error={!!formErrors.netWeight}
                  name={"netWeight" as keyof typeof data}
                  value={data.netWeight}
                  onChange={change}
                  endAdornment={
                    <InputAdornment position="start">kg</InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>
              <CardSpacer />

              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-grossWeight">
                  {intl.formatMessage({
                    defaultMessage: "Оврийн жин"
                  })}
                </InputLabel>
                <OutlinedInput
                  id="outlined-grossWeight"
                  disabled={disabled}
                  type="number"
                  error={!!formErrors.grossWeight}
                  name={"grossWeight" as keyof typeof data}
                  value={data.grossWeight}
                  onChange={change}
                  endAdornment={
                    <InputAdornment position="start">kg</InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>

              <CardSpacer />

              <FormControl>
                <RadioGroup
                  aria-label="net-or-gross"
                  name={"netOrGross" as keyof typeof data}
                  value={data.netOrGross}
                  onChange={e => change(e)}
                >
                  <FormControlLabel
                    value="NET"
                    control={<Radio color="primary" />}
                    label="Цэвэр жингээр"
                  />
                  <FormControlLabel
                    value="GROSS"
                    control={<Radio color="primary" />}
                    label="Овороор"
                  />
                </RadioGroup>
              </FormControl>
              <CardSpacer />
              <Divider />
              <CardSpacer />

              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  {intl.formatMessage({
                    defaultMessage: "Тээврийн үнэ (1кг)"
                  })}
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  disabled={disabled}
                  type="number"
                  error={!!formErrors.perkgAmount}
                  name={"perkgAmount" as keyof typeof data}
                  value={data.perkgAmount}
                  onChange={change}
                  startAdornment={
                    <InputAdornment position="start" style={{ marginTop: 12 }}>
                      &pound;
                    </InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>
              <CardSpacer />

              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  {intl.formatMessage({
                    defaultMessage: "НИЙТ ТЭЭВЭР"
                  })}
                </InputLabel>
                <OutlinedInput
                  disabled={disabled}
                  type="number"
                  value={
                    data.netOrGross === "NET"
                      ? data.netWeight * data.perkgAmount
                      : data.grossWeight * data.perkgAmount
                  }
                  startAdornment={
                    <InputAdornment position="start" style={{ marginTop: 12 }}>
                      &pound;
                    </InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>

              <SaveButtonBar
                disabled={disabled}
                onCancel={onBack}
                onDelete={onDelete}
                onSave={submit}
                state={saveButtonBarState}
              />
            </CardContent>
          </Card>
        );
      }}
    </Form>
  );
};

PackageForm.displayName = "PackageForm";
export default PackageForm;
