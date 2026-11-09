import { createClient, type MicroCMSContentId, type MicroCMSDate, type MicroCMSImage } from "microcms-js-sdk";

export const microcms = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_ID,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type FacilityType = {
  titleEN: string;
  titleJP: string;
  detail: string;
  bg: MicroCMSImage;
} & MicroCMSContentId &
  MicroCMSDate;

export type FaqType = {
  question: string;
  answer: string;
} & MicroCMSContentId &
  MicroCMSDate;

type CustomFacilities = {
  title: string;
  body: string[];
};

export type InformationType = {
  checkIn: string;
  checkOut: string;
  capacity: string;
  facilities: CustomFacilities[];
};
