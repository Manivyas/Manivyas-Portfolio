import { create } from 'zustand';

interface Config {
  showProfilePicture: boolean;
  profilePicturePath: string;
}

interface ConfigStore extends Config {
  toggleProfilePicture: () => void;
  setProfilePicturePath: (path: string) => void;
}

export const useConfig = create<ConfigStore>((set: any) => ({
  showProfilePicture: false,
  profilePicturePath: '/IMG_3326.jpg',
  toggleProfilePicture: () => set((state: ConfigStore) => ({ showProfilePicture: !state.showProfilePicture })),
  setProfilePicturePath: (path: string) => set({ profilePicturePath: path }),
}));
